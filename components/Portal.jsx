import ReactDom from 'react-dom';

export default function Portal(props) {
    const { handleClosePortal, children } = props;

    // Render modal into #portal(inside layout.js) instead of inside <Products /> (outside normal DOM hierarchy)
    return ReactDom.createPortal (
        <div className='portal-container'>
            <div onClick={handleClosePortal} className='portal-underlay'/>
            {children}
        </div>,
        document.getElementById('portal')
    )
}