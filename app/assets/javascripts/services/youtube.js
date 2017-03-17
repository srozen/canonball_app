angular.module('canonball').provider('Youtube', function YoutubeProvider(){
    var apiKey, userId, channelId;

    this.setApiKey = function(key){
        apiKey = key;
    };

    this.setUserId = function(id){
        userId = id;
    };

    this.setChannelId = function(id){
        channelId = id;
    };

    this.$get = ['$http', function($http){
        return {
            getVideos: function(nbResults){
                return $http({
                    method: 'GET',
                    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + channelId + '&maxResults=' + nbResults + '&order=date&type=video&key=' + apiKey,
                    data: ''
                }).then(function(response){
                    return response;
                }, function(error){
                    return error;
                })
            }
        }
    }]
});
