import Client from "../models/client-model.js";

export const ClientIndex = async (req, res) => {
    try {
        const movies = await Client.find();
        res.json(movies);
    }
    catch (error) {
        res.status(500).json({ message: error.message });

    }
}

export const ClientCreate = async (req, res) => {
    //create the cient info
    const newClient = new Client({
        title: req.body.title,
        desc: req.body.desc
    });
    try {
        const client = await newClient.save();
        return res.status(201).json(client);

    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const ClientDetail = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: error.message });
        }
        else {
            res.json(client);

        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const ClientUpdate = async (req, res) => {
    try {
        const updateClient = await Client.findOneAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.title,
                desc: req.body.desc,
            },
            {
                new: true
            }
        );
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }

}


export const ClientDelete = async (req, res) => {
    const clientId = req.params.id;
    try {
        await Client.deleteOne({ _id: clientId });
        res.json({ message: "Client Deleted" });
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}