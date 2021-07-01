module.exports = {
    Query: {
        

    },
    Mutation: {
        uploadImage: async (_, args, context, info) => {

            let { images } = await args;
            console.log(images);

            return {
                statusCode: 200,
                message: "Upload file successfully!"
            };
        }
    }
}



