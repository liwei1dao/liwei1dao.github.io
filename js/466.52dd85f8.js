"use strict";(self["webpackChunkvue_dreamfactory"]=self["webpackChunkvue_dreamfactory"]||[]).push([[466],{9620:function(e,l,t){t.r(l),t.d(l,{default:function(){return Z}});var a=t(3396),s=t(9242),i=t(7139),n=t(7312),u=t(11),o=t(6572),r=t(1888),f=t(1334),d=t(4075),c=t(3369),m=t(6824),h=t(8521),p=t(3289),w=t(9671);const _=(0,a.Uk)(" 上传游戏配置文件 "),k=(0,a.Uk)("mdi-cloud-upload"),g=(0,a.Uk)("将文件拖到此处，或"),W=(0,a._)("strong",{class:"blue--text text--lighten-1"},"点击上传",-1),v=(0,a.Uk)("只能上传 .json 格式的文件"),b=(0,a.Uk)("文件列表"),U=(0,a.Uk)(" mdi-close-circle "),x=(0,a.Uk)("提交"),C=(0,a.Uk)(" Close ");function D(e,l,t,D,y,j){return(0,a.wg)(),(0,a.j4)(c.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u._,{id:"drop-area",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(o.E,{class:"text-center"},{default:(0,a.w5)((()=>[_])),_:1}),(0,a.Wm)(d.J),(0,a.Wm)(r.Z,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{ref:"fileinput",onChange:l[0]||(l[0]=(...e)=>j.changeFile&&j.changeFile(...e)),type:"file",multiple:"multiple"},null,544),[[s.F8,!1]]),(0,a.Wm)(u._,{id:"drop-area",onClick:j.selectFile,variant:"outlined",height:"220"},{default:(0,a.w5)((()=>[(0,a.Wm)(r.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m.o,{justify:"center",dense:""},{default:(0,a.w5)((()=>[(0,a.Wm)(h.D,{cols:"12",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(p.t,{size:"120"},{default:(0,a.w5)((()=>[k])),_:1})])),_:1}),(0,a.Wm)(h.D,{cols:"12",class:"text-center"},{default:(0,a.w5)((()=>[g,W])),_:1}),(0,a.Wm)(h.D,{cols:"12",class:"text-center"},{default:(0,a.w5)((()=>[v])),_:1})])),_:1})])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(u._,{variant:"outlined",class:"mt-5"},{default:(0,a.w5)((()=>[(0,a.Wm)(o.E,null,{default:(0,a.w5)((()=>[b])),_:1}),(0,a.Wm)(r.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m.o,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.files,((e,l)=>((0,a.wg)(),(0,a.j4)(h.D,{cols:"12",key:l},{default:(0,a.w5)((()=>[(0,a.Wm)(u._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.Z,{class:"pa-0"},{default:(0,a.w5)((()=>[(0,a.Wm)(m.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h.D,{cols:"10"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,a.Wm)(h.D,{cols:"2",class:"d-flex justify-end"},{default:(0,a.w5)((()=>[(0,a.Wm)(n.T,{variant:"outlined",size:"x-small",icon:"",onClick:e=>j.removefile(l)},{default:(0,a.w5)((()=>[(0,a.Wm)(p.t,null,{default:(0,a.w5)((()=>[U])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,a.Wm)(f.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m.o,{justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(h.D,{cols:"5"},{default:(0,a.w5)((()=>[(0,a.Wm)(n.T,{variant:"flat",color:"secondary",disabled:0==y.files.length,loading:y.uploading,onClick:j.uploadres,block:""},{default:(0,a.w5)((()=>[x])),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(w.v,{modelValue:y.snackbar,"onUpdate:modelValue":l[2]||(l[2]=e=>y.snackbar=e),timeout:2e3},{action:(0,a.w5)((({attrs:e})=>[(0,a.Wm)(n.T,(0,a.dG)({color:"blue",text:""},e,{onClick:l[1]||(l[1]=e=>y.snackbar=!1)}),{default:(0,a.w5)((()=>[C])),_:2},1040)])),default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(y.errstr)+" ",1)])),_:1},8,["modelValue"])])),_:1})}var y=t(3078),j={name:"upload",data(){return{errstr:"",snackbar:!1,files:[],dialog:!1,uploading:!1,uploadprogress:0}},methods:{changeFile(e){let l=["json"];console.log("suffixs:%o",l);for(let i of e.target.files){let e=i.name,n=!1;var t=e.lastIndexOf(".");if(-1==t)return this.$refs.fileinput.value=null,this.errstr="目标文件格式不符合规范!",void(this.snackbar=!0);for(var a=e.substring(t+1),s=0;s<l.length;s++)if(a==l[s]){n=!0;break}if(!n)return this.$refs.fileinput.value=null,this.errstr="目标文件格式不符合规范!",void(this.snackbar=!0);this.files.push({file:i,title:i.name})}this.$refs.fileinput.value=null},selectFile(){this.$refs.fileinput.dispatchEvent(new MouseEvent("click"))},removefile(e){this.files.forEach((function(l,t,a){t==e&&a.splice(t,1)}))},uploadres(){this.uploading=!0;var e=new FormData;for(let l=0;l<this.files.length;++l)e.append("file_"+l,this.files[l].file);e.append("filenum",this.files.length),(0,y.ur)("/upload",e,(e=>{this.uploadprogress=e})).then((e=>{this.uploading=!1,this.errstr="文件上传成功!",this.snackbar=!0,this.files=[],console.log("uploadformData 文件上传成功"),this.$forceUpdate()})).catch((e=>{this.uploading=!1,this.errstr=e.message,this.snackbar=!0,console.log("uploadformData 文件上传失败 err:%o",e)}))}}},F=t(89);const E=(0,F.Z)(j,[["render",D]]);var Z=E}}]);
//# sourceMappingURL=466.52dd85f8.js.map