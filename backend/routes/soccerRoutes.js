import {addNewPlayer,
    getPlayer,
    getPlayerWithID,
    UpdatePlayer,
    deletePlayer
} from '../controller/playerController';

const routes = (app) =>{
    app.route('/players')
        .get(getPlayer)

        .post(addNewPlayer);
    app.route('/player/:PlayerId')
        //get specific player
        .get(getPlayerWithID)
        // update specific player
        .put(UpdatePlayer)

        //delete a player
        .delete(deletePlayer)
}

export default routes;