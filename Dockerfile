# مرحله 1: ساخت (build)
FROM node:18-alpine AS builder

WORKDIR /app

# فقط package.json و package-lock.json رو کپی کن برای نصب سریعتر
COPY package*.json ./

# نصب dependencyها (dev و prod چون برای build به dev هم نیاز داری)
RUN npm install

# کپی کردن سورس کد
COPY . .

# build کردن تایپ‌اسکریپت به جاوااسکریپت
RUN npm run clean && npx tsc

# مرحله 2: ران‌تایم (production)
FROM node:18-alpine AS runner

WORKDIR /app

# فقط dependencyهای prod
COPY package*.json ./
RUN npm install --omit=dev

# کپی کردن خروجی build شده از مرحله قبل
COPY --from=builder /app/dist ./dist

# کپی کردن فایل env (اختیاری اگر داشتی)
COPY .env .env
COPY .env.example .env.example
# پورتی که برنامه گوش می‌کنه
EXPOSE 5010

# اجرای سرور
CMD ["node", "dist/server.js"]
