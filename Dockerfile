FROM registry.cn-hangzhou.aliyuncs.com/library/nginx:stable-alpine


# 删除默认配置
RUN rm /etc/nginx/conf.d/default.conf

# 拷贝 Vue 打包文件
COPY dist/ /usr/share/nginx/html

# 拷贝自定义 nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 启动 nginx
CMD ["nginx","-g","daemon off;"]
