// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.databaseId) {
    notion.databases
      .query({
        database_id: req.query.databaseId,
      })
      .then((data: any) => {
        res.json(data);
      });
  }
}
