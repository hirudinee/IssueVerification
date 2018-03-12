module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["DBid"] = {
            host: process.env.EndPoint_rdsDBid,
            port: process.env.Port_rdsDBid,
            user: process.env.User_rdsDBid,
            password: process.env.Password_rdsDBid,
            database: "DBname",
        };
    };