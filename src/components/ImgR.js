import React, {Component} from "react";

import Resizer from "react-image-file-resizer";


class Image extends Component {
  constructor(props) {
    super(props);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.state = {
      newImage: "",
    };
  }

  fileChangedHandler(event) {
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          100,
          100,
          "WBEP",
          100,
          0,
          (uri) => {
            console.log(uri);
            this.setState({ newImage: uri });
          },
          "base64",
          400,
          100,
        );
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileChangedHandler} />
        <img src={this.state.newImage} alt="" />
      </div>
    );
  }
}

export default Image;