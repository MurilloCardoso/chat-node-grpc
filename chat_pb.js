var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ChatMessage', null, global);

proto.ChatMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChatMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ChatMessage.displayName = 'proto.ChatMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {

proto.ChatMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ChatMessage.toObject(opt_includeInstance, this);
};


proto.ChatMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}

proto.ChatMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChatMessage;
  return proto.ChatMessage.deserializeBinaryFromReader(msg, reader);
};

proto.ChatMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {timestamp} */ (reader.readString());
      msg.setTimeStamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


proto.ChatMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChatMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


proto.ChatMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimeStamp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string user = 1;
 * @return {string}
 */
proto.ChatMessage.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ChatMessage} 
 */
proto.ChatMessage.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.ChatMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.ChatMessage} 
 */
proto.ChatMessage.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional string text = 2;
 * @return {string}
 */
proto.ChatMessage.prototype.getTimeStamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {timestamp} value
 * @return {!proto.ChatMessage}
 */
proto.ChatMessage.prototype.setTimeStamp= function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

goog.object.extend(exports, proto);
