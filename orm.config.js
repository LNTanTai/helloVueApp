"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ormConfig() {
    const commonConf = {
        SYNCRONIZE: false,
        ENTITIES: [__dirname + '/domain/*.entity{.ts,.js}'],
        MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
        CLI: {
            migrationsDir: 'src/migrations',
        },
        MIGRATIONS_RUN: true,
    };
    let ormconfig = {
        name: 'default',
        type: 'mysql',
        database: 'space',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        logging: false,
        synchronize: commonConf.SYNCRONIZE,
        entities: commonConf.ENTITIES,
        migrations: commonConf.MIGRATIONS,
        cli: commonConf.CLI,
        migrationsRun: commonConf.MIGRATIONS_RUN,
    };
    if (process.env.BACKEND_ENV === 'prod') {
        ormconfig = {
            name: 'default',
            type: 'mysql',
            database: 'space',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            logging: false,
            synchronize: commonConf.SYNCRONIZE,
            entities: commonConf.ENTITIES,
            migrations: commonConf.MIGRATIONS,
            cli: commonConf.CLI,
            migrationsRun: commonConf.MIGRATIONS_RUN,
        };
    }
    // if (process.env.BACKEND_ENV === 'test') {
    //   ormconfig = {
    //     name: 'default',
    //     type: 'mysql',
    //     database: 'space',
    //     host: 'localhost',
    //     port: 3306,
    //     username: 'root',
    //     password: '123456',
    //     logging: false,
    //     synchronize: commonConf.SYNCRONIZE,
    //     entities: commonConf.ENTITIES,
    //     migrations: commonConf.MIGRATIONS,
    //     cli: commonConf.CLI,
    //     migrationsRun: commonConf.MIGRATIONS_RUN,
    //   };
    // }
    return ormconfig;
}
exports.ormConfig = ormConfig;
//# sourceMappingURL=orm.config.js.map