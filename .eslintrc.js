module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "jsx-a11y/media-has-caption": [ 2, {
        "audio": [ "Audio" ],
        "video": [ "Video" ],
        "track": [ "Track" ],
      }],
    }
};
