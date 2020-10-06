import { Post } from "./entities/Post";
import { __prod__ } from "./contants";
import { MikroORM } from "@mikro-orm/core";
import { url } from "inspector";
import { type } from "os";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: "xhtpizfm",
    user: "xhtpizfm",
    password: "ioNZ8YQorVREwxkE-N1x3Ew0dHtXu_t3",
    type: "postgresql",
    debug: !__prod__,
  });

  const post = orm.em.create(Post, { title: "my frist post" });
};
