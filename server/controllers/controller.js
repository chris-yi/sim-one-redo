module.exports ={
    getShelf: ((req,res) => {
        const db = req.app.get('db');

        if(req.params.id === 'a'){
            db.getShelf([1,5])
            .then( shelf => res.status(200).send(shelf))
            .catch( () => res.status(500).send())
        }

        if(req.params.id === 'b'){
            db.getShelf([6,10])
            .then( shelf => res.status(200).send(shelf))
            .catch( () => res.status(500).send())
        }

        if(req.params.id === 'c'){
            db.getShelf([11,15])
            .then( shelf => res.status(200).send(shelf))
            .catch( () => res.status(500).send())
        }

        if(req.params.id === 'd'){
            db.getShelf([16,23])
            .then( shelf => res.status(200).send(shelf))
            .catch( () => res.status(500).send())
        }

    }),


    getBin: ((req, res) => {
        const db = req.app.get('db');
        db.getBin([req.params.id])
        .then( shelf => res.status(200).send(shelf))
        .catch( () => res.status(500).send())
    }),

    updateBin: ((req, res) => {
        const db = req.app.get('db');
        const {bin_id, name, price} = req.body;
        console.log(bin_id, name, price)
        db.updateBin([bin_id, name, price])
        .then(() => res.status(200).send())
    }),

    deleteBin: ((req, res) => {
        const db = req.app.get('db');
        db.updateBin([req.params.id, null, null])
        .then(() => res.status(200).send())
    })

}