import { Serializer } from 'ember-cli-mirage';

export default Serializer.extend({
  root: false,
  embed: true,

  normalize(json) {
    return {
      data: {
        type: "messages",
        attributes: json
      }
    };
  }
});
