(function() {
	'use strict';
	angular.module('app')
	.factory('UserFactory', UserFactory);
  function UserFactory($http, $q) {
    var o = {};
    o.status = {};

    if(getToken()) {
      setUser();
    }

    o.logout = function() {
      removeToken();
      o.status.username = null;
      o.status._id = null;
    };
    o.registerUser = function(user) {
      console.log(user);
      var q = $q.defer();
      $http.post('/api/user/register', user).then(function(res) {
        o.setToken(res.data);
        setUser();
        var user  = o.getUser();
        o.status.username = user.username;
        o.status._id = user._id;
        q.resolve(res.data);
      });
      return q.promise;
    };

    o.loginUser = function(user) {
      var q = $q.defer();
      $http.post('/pi/user/login', user).then(function(res) {
        setToken(res.data);
        setUser();
        var user = o.getUser();
        o.status.username = user.username;
        o.status._id = user._id;
        q.resolve(res.data);
      });
      return q.promise;
    };

    function setUser(){
      var user = JSON.parse(urlBase64Decode(getToken().split('.')[1]));
      o.status.username = user.username;
      o.status._id = user._id;
      console.log(o.status);
    }
    function removeUser(){
      o.status.username = null;
      o.status._id = null;

    }
    function getToken() {
      return localStorage.getItem('token');
    }
    function setToken(token) {
      return localStorage.setItem('token',token);
    }
    function removeToken() {
      return localStorage.removeItem('token');
    }
    function logout() {
      removeToken();
      removeUser();
    }

    // o.comPost = function(comment){
    //   var q = $q.defer();
    //   $http.post('/api/user/comment', comment).then(function(res){
    //     q.resolve(res.data);
    //   });
    //   return q.promise;
    // };

    function urlBase64Decode(str) {
      var output = str.replace(/-/g, '+').replace(/_/g, '/');
      switch (output.length % 4) {
        case 0: { break; }
        case 2: { output += '=='; break; }
        case 3: { output += '='; break; }
        default: {
          throw 'Illegal base64url string!';
        }
      }
      return decodeURIComponent(escape(window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
    }

    o.getUser = function() {
      return JSON.parse(urlBase64Decode(getToken().split('.')[1]));
    };



		return o;
  }
})();
