import { connPool } from '../../db/connect.js';

export const showPerson = async (req, res) => {
    const result = await connPool.query("SELECT * FROM person");
    res.json(result[0]);
};
export const showPersonId = async (req, res) => {
    const [result] = await connPool.query("SELECT * FROM person WHERE personId=?", [req.params.id]);
    if (result.length <= 0) return res.status(404).json({
        messaje: 'data not found'
    });
    res.json(result[0]);
};
export const createPerson = async (req, res) => {
    try {
    const { name, lastName, document, documentType} = req.body;
    let sqlQuery = "INSERT INTO person (personName,personLast_name,personDocument,documentTypeFk) VALUES(?,?,?,?)";
    const [result] = await connPool.query(sqlQuery, [name, lastName, document, documentType]);
    res.send({
        id:result.insertId,
        name: name,
        lastName: lastName,
        document: document,
        documentType: documentType
    });
} catch (error) {
    return res.status(500).json({
        message: 'Something went wrong in the consultation'
    });
}
};
export const updatePerson = async (req, res) => {
    const { name, lastName, document, documentType } = req.body;
    //console.log(req.body);
    let sqlQuery = "UPDATE person SET personName=IFNULL(?,personName),"+
    "personLast_name=IFNULL(?,personLast_name),personDocument=IFNULL(?,personDocument).documentTypeFk=IFNULL(?,documentTypeFk) WHERE personId=?";
    const [result] = await connPool.query(sqlQuery, [name, lastName, document, documentType, req.params.id]);
    if (result.affectedRows === 0)return res.status(404).json({ message: 'data not foud' });
    const [row] = await connPool.query("SELECT * FROM person WHERE personId=?", [req.params.id]);
    res.json(
        row[0]
    );
};
export const deletePerson = async (req, res) => {

    const result = await connPool.query("DELETE FROM person WHERE personId=?", [req.params.id]);

    if (result.affectedRows <= 0) return res.status(404).json({message: 'data not found' });

    res.sendStatus(204)

};
