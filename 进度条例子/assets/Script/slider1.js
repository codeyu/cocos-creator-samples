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
        progress:{
            default:null,
            type:cc.Sprite
        },

        _width:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let slider = this.getComponent(cc.Slider);
        if(slider == null || this.progress == null){
            return;
        }

        this._width = this.progress.node.width;
        this.progress.node.width = this._width * slider.progress;

        let self = this;
        slider.node.on('slide', function(event){
            self.progress.node.width = slider.progress * self._width;
        }, this);
    },

    start () {

    },

    // update (dt) {},
});
