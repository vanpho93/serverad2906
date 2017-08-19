const express = require('express');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.get('/admin', (req, res) => res.render('admin', { arrAds }));

server.listen(3000, () => console.log('Server started!'));

class Ad {
    constructor(id, branch, link, image) {
        this.id = id;
        this.branch = branch;
        this.link = link;
        this.image = image;
    }
}

const arrAds = [
    new Ad(1, 'Facebook', 'facebook.com', '1.png'),
    new Ad(2, 'Twitter', 'twitter.com', '2.png'),
    new Ad(3, 'Instagram', 'instagram.com', '3.png'),
    new Ad(4, 'Google', 'plus.google.com', '4.png')
];

io.on('connection', socket => {
    socket.on('ADMIN_CHANGE_ADD_BY_IMAGE', image => {
        const ad = arrAds.find(e => e.image === image);
        socket.broadcast.emit('SHOW_THIS_AD', ad);
    });
});
