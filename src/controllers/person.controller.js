import { connPool } from '../../db/connect.js';

export const showPerson = async (req, res) => {
    const result = await connPool.query("SELECT * FROM person");
    res.json(result[0]);
};
export const showPersonId = async (req, res) => {
    const result = await connPool.query("SELECT * FROM person");
    res.json(result[0]);
};
export const createPerson = async (req, res) => {
    const {name,lastName,document,documentType}=req.body;
    console.log(req.body);
    let sqlQuery="INSERT INTO person (personName,personLast_name,personDocument,documentTypeFk) VALUES(?,?,?,?)";
    const [result] = await connPool.query(sqlQuery,[name,lastName,document,documentType]);
    res.send({
        id:result.insertId,
        name:name,
        lastName:lastName,
        document:document,
        documentType:documentType
    });
};
export const updatePerson = async (req, res) => {
    const result = await connPool.query("");
    res.json(result[0]);
};
export const deletePerson = async (req, res) => {
    const result = await connPool.query("");
    res.json(result[0]);
};
