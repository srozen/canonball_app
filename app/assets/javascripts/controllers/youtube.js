angular.module('canonball').controller('YoutubeController', ['Youtube', '$scope', function(Youtube, $scope){
    Youtube.getVideos(3).then(function(videos){
        getFirstVideos(videos.data.items);
        getPreviousVideos(videos.data.items);
       $scope.lastVideoUrl = getVideoUrl($scope.lastVideo);
    });

    var getFirstVideos = function (lastVideos) {
        $scope.lastVideo = lastVideos[0];
    };

    var getPreviousVideos = function (lastVideos) {
        lastVideos.splice(0,1);
        $scope.previousVideos = lastVideos;
    };

    var getVideoUrl = function (video) {
        return "http://www.youtube.com/embed/" + video.id.videoId;
    };
}]);