const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAMFBMVEXk5ueutLfq6+yrsbSxt7rY29zBxcjc3+Dh4+S8wcS1ur24vcDKztDS1tfP09TEyMqXK5gSAAADIElEQVR4nO2azdarIAxFJagggr7/2160/fpvTVIP3gF75myvJECENE2lUqlUKpVKpVKpVCqVFaKzDRaIvEtx7vs+xuSaU538NLTG/mHC0J1lQl2fBZ7I37M/IzxufFW5+pTXodl8Ull1zFTUhrp2S2XVGXxBmfTFZLVpXTGX+C0sV7pCqZoZLsaWWeUTxyVTIFOUmC6mxVexb5kuxgxoFxq4gcllE7FFTJyFdAdbNoIkLaEZkKEh1qp+sIGub5kLtoZlFbOEBlg1oopZZXpY1XTSwAB3PurlMiaBZORZynmaQS5O7mJMABUN97h+Dg3GhdfHvMmA9j3BGfkgg+nOKShccgVjikaxmDKgbU+TpXw8VZmyMioXlMz/VMA0alxQXbnm0DYWdGyL+7xVBtTr7d09fJbBuDROU8EjqIXQHE42Ylykv5MXYH9OTtGQo1xyRyN1Qf77yxtP4B0NSQPT41zEobHYyyvR6ka1nH+I/nAD+lZPcFqizsgHRq4NOkkL3J9cO8JVGnbZFLgGXm04cQGeAy82u7Gx8IV0x319blruXIupZPy3FW4NqonZgKbtZ8HWFX8zpfgxVzakM55vyU/Lo/ajiLUDftfd0iEXh/b2yN72U/kEveBdmqYplXsi3YSeOE2i8V2a5n4M1zy1YRzmmDpXembEdzFLrCMZ5rmA83cI81QoZ+TTPNqPYxCPUmsxgyPkpmA3d7s3oQicqKE08ERuQmaMkJERcvP33GwFqD/+B9cJg/IUnkN3ZXKDJip3n/G488q/jTPJdcIxUyMbp7NYZ/699yMXjlBZbOzPuYrHmFx0fpx+Uj0xbdv80APSXt+t0FFfHnH+j+Q2urio3kf3bVRvCRgX1W0Wf7RKbiO9nQC6yDPlgS7L87JIRvVqLLARtBWSkTMdgssbZMFcEJQN3IWfKOnImQ7mbZJqTEYM75TCV+/VhiOD3WIeZDizLEUqZoFRNR68391hLCj8HnOT2d1rqC/lwnm/1E1f6NjLU5lN5sJuC1quZBg9n2r4QsveaIJqLEXNTmRGW5IdmZe7VDB7MpVKpVKpnMw/7AMkKCRCMkAAAAAASUVORK5CYII=",
  },
  todos: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

//Export the model
const User = mongoose.model("User", userSchema);
module.exports = User;
