#!/usr/bin/env sh

# abort on errors/当发生错误时中止脚本
set -e

# build
npm run build

# navigate into the build output directory/cd 到构建输出的目录下 
cd dist

# place .nojekyll to bypass Jekyll processing/部署到自定义域域名
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# 下面四個指令是透過git指令將編譯完成的檔案部屬到遠端
git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 兩者差異在部屬到GitHub的哪個分支上。擇一使用即可

# 1.部屬到main主頁
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main
# git push -f git@github.com:JennyDisc/JennyDisc.github.io.git main

# 2.部屬到GitHub Pages。老師建議使用這個。專案路徑記得改成/寫法。(黃底為GitHub專案名稱)
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/<USERNAME>/<REPO>.git main:gh-pages
git push -f https://github.com/JennyDisc/2023-thef2e.git main:gh-pages

cd -