let download = require('download-git-repo');
download('flippidippi/download-git-repo-fixture', 'test/tmp', function (err) {
    console.log(err ? 'Error' : 'Success')
})