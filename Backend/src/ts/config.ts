require("dotenv").config();

module.exports = {
    app: {
        port: process.env.PORT || 3360,
        hostname: process.env.HOSTNAME || "127.0.0.1"
    }, 
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        port: process.env.MYSQL_PORT || 3306,
        database: process.env.MYSQL_DATABASE || 'spark-e'
    },
    jwtSecret: process.env.JWT_SECRET || 's3cr3t_k3y_w1th_l0ts_0f_r@nd0m_ch@r@ct3rs!'
}