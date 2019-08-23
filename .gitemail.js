/*
.gitemail.js文件

npm i nodemailer
使用：
node .gitemail文件.js 收件人 仓库名称 仓库地址
示例：
node .gitemail.js "li@latelee.org, latelee@163.com" "CICD实践项目" https://github.com/latelee/ci
*/
const nodemailer  = require("nodemailer");

// 参数：发件人，收件人(多个用逗号隔开)，主题，正文（支持html格式）
function sendMail(from, aliasName, tos, subject, msg)
{
    const smtpTransport = nodemailer.createTransport({
    host: 'smtp.exmail.qq.com',
    secureConnection: true, // use SSL
    secure: true,
    port: 465,
    auth: {
        user: from,
        pass: '1qaz@WSX',
    }
    });

    smtpTransport.sendMail({
        from    : aliasName + ' ' + '<' + from + '>', // 发送者邮件，注意，这里设置了别名。
        to      : tos, // 目标邮件地址
        subject : subject, //邮件主题
        //text    : msg, // 不使用text
        html    : msg    // 而是使用html，因为html比text更丰富一些
    }, function(err, res) {
        if (err)
        {
            console.log('error: ', err);
        }
    });
}

// 这个函数做一些特殊符号的转换
function nl2br(str, isXhtml) {
    var breakTag = (isXhtml || typeof isXhtml === 'undefined') ? '<br />' : '<br>';
    var str = (str + '').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
};

// 主函数，可自行添加新内容
function main()
{
    var args = process.argv.splice(2);
    require('child_process').exec('git log -1 --stat', function(err, stdout) {
        stdout = nl2br(stdout)
        sendMail('cicd@latelee.org', 'CI邮件通知', args[0], 
            args[1] + '仓库代码更新',
            '<h2>' + args[1] + '仓库代码有提交，请及时更新。</h2>地址为：<a href=\"' + args[1] + '\"target=\"_blank\">' + args[2] + '</a></br>' + '<h3>提交日志：</h3>' + stdout);
    });
}

// call main
main();