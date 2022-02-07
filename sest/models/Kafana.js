let kafanaSongs = [

    {
        id: 1,
        songTitle: "Za Liljanu",
        artist: "Toma Zdravkovic"
    },
];


const addSong = async({ songTitle, artist }) => {
    const newSong = {
        id: kafanaSongs.length + 1,
        songTitle: songTitle,
        artist: artist
    }
    kafanaSongs.push(newSong)
};

const getSongs = async() => {
    return kafanaSongs;
};

const editSong = async({ id, songTitle, artist }) => {
    kafanaSongs = kafanaSongs.map(pesMA => {
        if (pesMA.id == id) {
            return {
                id: pesMA.id,
                songTitle,
                artist
            }
        }
        return pesMA;
    })
};

const deleteSong = async(id) => {
    kafanaSongs = kafanaSongs.filter(pesMa => pesMa.id !== id);
}


module.exports = {
    addSong,
    getSongs,
    editSong,
    deleteSong
}