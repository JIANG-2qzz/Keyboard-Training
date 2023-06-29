import './layout.css'

function Layout(props){
    const {children} = props
    // console.log(props)
    return (
        <div>
            <div className="center">
                {children}
            </div>
        </div>
    )
}

export default Layout