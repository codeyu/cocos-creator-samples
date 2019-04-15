// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        mask:{
            default:null,
            type:cc.Mask
        },

        _width:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let slider = this.getComponent(cc.Slider);

        if(slider == null || this.mask == null){
            return;
        }

        this._width = this.mask.node.width;
        this.mask.node.children[0].width = this._width * slider.progress;

        let self = this;
        slider.node.on('slide', function(event){
            self.mask.node.children[0].width = self._width * slider.progress;
        }, this);


    },

    start () {

    },

    // update (dt) {},
});
