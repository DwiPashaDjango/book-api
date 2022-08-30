const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const { db } = require('./model/dbConection');
const app = express();

app.use(cors());
app.use(express.json());
app.use(BodyParser.urlencoded({ extended: true }))


// get book

app.get('/api/book/', (req, res) => {
    const query = "SELECT * FROM books";

    db.query(query, (err, result) => {
        if (err) {
            res.send('Error Sql Query');
            console.log(result);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});

// detail book

app.get('/api/book/:book_id', (req, res) => {
    const bookId = req.params.book_id;

    const query = "SELECT * FROM books WHERE book_id = ?";
    db.query(query, bookId, (err, result) => {
        if (err) {
            res.send('Error Sql Query');
            console.log(result);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});

// ########

// add book

app.post('/api/create/', (req, res) => {
    const Judul = req.body.judul;
    const penulisBuku = req.body.penulis_buku;
    const penerbitBuku = req.body.penerbit_buku;
    const kelompokBuku = req.body.kelompok_buku;
    const rakBuku = req.body.rak_buku;

    const query = "INSERT INTO books (judul, penulis_buku, penerbit_buku, kelompok_buku, rak_buku) VALUE (?, ?, ?, ?, ?)";
    db.query(query, [Judul, penulisBuku, penerbitBuku, kelompokBuku, rakBuku], (err, result) => {
        if (err) {
            res.send('Error Sql Query');
            console.log(result);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});

// #############

// update book

app.put('/api/update/:book_id', (req, res) => {
    const bookId = req.params.book_id;
    const Judul = req.body.judul;
    const penulisBuku = req.body.penulis_buku;
    const penerbitBuku = req.body.penerbit_buku;
    const kelompokBuku = req.body.kelompok_buku;
    const rakBuku = req.body.rak_buku;

    const query = "UPDATE books SET judul = ?, penulis_buku = ?, penerbit_buku = ?, kelompok_buku = ?, rak_buku = ? WHERE book_id = ?";
    db.query(query, [Judul, penulisBuku, penerbitBuku, kelompokBuku, rakBuku, bookId], (err, result) => {
        if (err) {
            res.send('Error Sql Query');
            console.log(result);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});

// ###########

// delete book 

app.delete('/api/delete/:book_id', (req, res) => {
    const bookId = req.params.book_id;

    const query = "DELETE FROM books WHERE book_id = ?";
    db.query(query, bookId, (err, result) => {
        if (err) {
            res.send('Error Sql Query');
            console.log(result);
        } else {
            res.send(result);
            console.log(result);
        }
    });
}); 

app.listen('3000', () => {
    console.log('server running in port 3000!');
});