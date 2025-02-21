# 部署

本文以开发者账户演示，其他账户只要能在 Azure 创建应用就行

1. 应用注册部分
   1. 登录[Azure 管理中心](http://aad.portal.azure.com)
   2. 点击 Azure Active Directory>应用注册>新注册，名称随便填，受支持的帐户类型选 仅此组织目录中的帐户。注册
      ![1](https://oness.dzaaaaaa.com/docImage/deploy/1.png)
   3. 记录 CLIENT_ID，TENANT_ID 值
      ![2](https://oness.dzaaaaaa.com/docImage/deploy/2.png)
   4. 点击证书与密码>新客户端密码,记录值为 CLIENT_SECRET
      ![3](https://oness.dzaaaaaa.com/docImage/deploy/3.png)
   5. 选择 API 权限>添加权限>Microsoft Graph>应用程序权限，添加 Files.Read.All,User.Read.All 权限并代表管理员同意权限
      ![4](https://oness.dzaaaaaa.com/docImage/deploy/4.png)
2. github 部分
   1. fork [OneSS 库](https://github.com/Tualin14/OneSS),或者你可以复制一份传到自己私有库。
   2. 打开 setting 文件夹里的 userList，输入要分享的账户，如图
      ![5](https://oness.dzaaaaaa.com/docImage/deploy/5.png)
3. vercel 部分

   1. 在[vercel](https://vercel.com/new) 注册登录选择新项目。导入自己的 OneSS 库。
   2. 在环境变量处填入之前获取的 CLIENT_ID，TENANT_ID，CLIENT_SECRET
      ![6](https://oness.dzaaaaaa.com/docImage/deploy/6.png)
   3. 部署
   4. 自定义域名 (可选)

      - 在 Settings>Domains 添加自己的域名
      - 注意:

        若使用 cloudflare，官方不建议使用代理功能，具体见[官方链接](https://vercel.com/support/articles/using-cloudflare-with-vercel?query=cloudf)

4. 成功后及可访问

若根据 Readme 无法成功部署，可参考[视频流程](https://www.bilibili.com/video/BV1SZ4y1d73v/)
