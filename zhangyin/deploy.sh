#!/bin/bash

echo "🚀 高考英文读后续写学习平台部署脚本"
echo "===================================="

# 1. 构建项目
echo "📦 构建生产版本..."
npm run build || npx vite build

if [ $? -eq 0 ]; then
    echo "✅ 构建成功！"
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi

# 2. 询问部署方式
echo ""
echo "请选择部署方式："
echo "1. Vercel (推荐)"
echo "2. Netlify"
echo "3. GitHub Pages"
echo "4. 其他静态托管"

read -p "请输入选项 (1-4): " choice

case $choice in
    1)
        echo "🚀 部署到 Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "📥 正在安装 Vercel CLI..."
            npm i -g vercel
            vercel --prod
        fi
        ;;
    2)
        echo "📤 准备上传到 Netlify..."
        echo "请访问: https://netlify.com"
        echo "拖拽 dist 文件夹到网页即可"
        echo "dist 文件夹路径: $(pwd)/dist"
        ;;
    3)
        echo "📚 部署到 GitHub Pages..."
        echo "请确保已创建 GitHub 仓库"
        echo "然后运行:"
        echo "  git init"
        echo "  git add ."
        echo "  git commit -m 'Deploy'"
        echo "  git remote add origin YOUR_REPO_URL"
        echo "  git push -u origin main"
        ;;
    4)
        echo "📂 静态文件已生成在 dist/ 文件夹"
        echo "你可以将 dist 文件夹上传到任何静态托管服务"
        echo "例如: 阿里云OSS、腾讯云COS、AWS S3等"
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac