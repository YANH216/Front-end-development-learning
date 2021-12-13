路由组件的lazyLoad
1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包

    const Login = lazy( () => import('') )

2.通过<Suspense> 指定在加载得到路由打包文件前显示一个自定义的loading界面
    <Suspense fallback= { <h1>Loading...</h1> } >
        <Routes>
            <Route path= ""  element= {} />
        </Routes>
    </Suspense>