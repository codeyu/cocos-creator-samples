cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',

        mask:{
            default:null,
            type:cc.Mask
        },

        // slider:{
        //     default:null,
        //     type:cc.Slider
        // },

        // progress:{
        //     default:null,
        //     type:cc.ProgressBar
        // },
    },

    onClickCallback(event, customEventData){
        cc.log(this.mask.node.width);
        
        this.mask.node.width *= 0.5;

        cc.log(this.mask.node.width);
    },

    // use this for initialization
    onLoad: function () {
        //this.label.string = this.text;

        
    },


    // called every frame
    update: function (dt) {

    },
});
