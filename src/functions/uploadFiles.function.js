const fs = require('fs');
const path = require('path');

module.exports = async (files) => {
    // If files is not an array, convert it to array
    if (!Array.isArray(files))
        files = [...files];

        
    // Process uploading files
    return await Promise.all(files.map(async (file, index) => {
        // Create read stream & get information of file
        const {
            filename,
            mimetype,
            createReadStream
        } = await file;
        const stream = await createReadStream();


        // Handle file name
        let {
            name,
            ext
        } = path.parse(filename);
        name = name.replace(/[^a-z0-9]/gi, '-').replace(/ /g, '_') + '-' + Date.now();


         // Determine folder type
         let typeFolder = 'others';
         // If file type is image, type folder will be images
         if(mimetype.indexOf('image') > -1)
             typeFolder = 'images';


        // Determine upload path
        let uploadPath = path.join(__dirname, `../../public`, process.env.UPLOAD_FOLDER, typeFolder, `/${ name }${ ext }`);


        // Upload file to upload path
        try {
            let writeStream = fs.createWriteStream(uploadPath);
            await stream.pipe(writeStream);

            return {
                filename: name,
                mimetype,
                url: `/${process.env.UPLOAD_FOLDER}/${typeFolder}/${ name }${ ext }`,
                path: uploadPath
            };

        } catch (error) {
            throw new Error(error.message || 'Some error happen while uploading files');
        }
    }));
}