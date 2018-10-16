# react-family-ie8

预览地址：[https://brickspert.github.io/react-family-ie8/index.html](https://brickspert.github.io/react-family-ie8/index.html)

 git https://github.com/brickspert/react-family-ie8

该框架是基于[react-family](https://github.com/brickspert/react-family)修改的兼容ie8的框架。

修改流程放在[这里](https://github.com/brickspert/blog/issues/5)

希望您能和我一起完善这个框架！欢迎`fork`

## 开发坏境启动

1. `npm install`
2. `npm start`
3. 浏览器打开[http://localhost:8080](http://localhost:8080)

备注：如果要在局域网访问，请修改`package.json`-`start`命令，增加`--public 192.168.x.x`，后面为你的局域网`ip`。

## 生产坏境部署

1. `npm run build`

2. 拷贝dist文件夹至服务器即可





关于redux connect的参数简写的问题
https://segmentfault.com/a/1190000010416732

第二个参数允许我们将action作为props绑定到组件中，mapDispatchToProps希望你返回包含对应action的object对象，例如：

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: (...args) => dispatch(actions.increase(...args)),
    decrease: (...args) => dispatch(actions.decrease(...args))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(yourComponent)

当你想对组件的render更新进行更好的控制的时候，它也支持返回function方法，具体可以点击#279查看，例子：

const mapDispatchToProps = {
    // increment: () => increment(1),
    increase, // import increase function from action
    decrease 
}




 {/*<div  className="modal fade" role="dialog" aria-labelledby="modalLabel">*/}
                 {/*<div className="modal-dialog modal-sm">*/}
                    {/*<div className="modal-content"> */}
                        {/*<div className="modal-header"> */}
                            {/*<button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button> */}
                            {/*<h4 className="modal-title" id="modalLabel">fdsfds</h4>*/}
                            {/*</div> */}
                        {/*<div className="modal-body"> */}
                            {/*<p>fdsfdsfdsf</p>*/}
                            {/*</div> */}
                        {/*<div className="modal-footer"> */}
                            {/*<button type="button" className="btn btn-default cancel" data-dismiss="modal">确认</button>*/}
                            {/*<button type="button" className="btn btn-primary ok" data-dismiss="modal">取消</button>*/}
                            {/*</div> */}
                        {/*</div> */}
                    {/*</div> */}
                {/*</div>*/}
                 <div  className="modal  fade" role="dialog" aria-labelledby="modalLabel" style={{display:'block !important',opacity:'1 !important'}}>
                 <div className="modal-dialog">
                     <div className="modal-content">
                         <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="modalLabel">范德萨范德萨</h4>
                            </div>
                            <div className="modal-body">
                                fdsfsf
                            </div>
                        </div>
                    </div>
                </div>