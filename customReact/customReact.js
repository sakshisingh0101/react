// import Chai from "/workspaces/react/customReact/Chai.jsx"
function customRender(reactElement,continer)
{/*
    const element=document.createElement(reactElement.type);
    element.setAttribute('id',reactElement.props.id)
    element.setAttribute('href',reactElement.props.href);
    const text=document.createTextNode(reactElement.children);
    element.append(text);
    continer.append(element);
    */
    const element=document.createElement(reactElement.type);
    const text=document.createTextNode(reactElement.children);
    element.appendChild(text);
    for(const prop in reactElement.props )
        {   if(prop=='Children')
            {
                continue;
            }
            element.setAttribute(prop,reactElement.props[prop]);
        }
        continer.appendChild(element);

}


const reactElement={
    type:'a',
    props:{
        id:'google',
        href:"https://www.google.co.in/"
    },
    children:"Welcome to google"


}
const continer=document.getElementById('root');
customRender(reactElement,continer)