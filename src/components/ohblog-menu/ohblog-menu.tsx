import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ohblog-menu',
  styleUrl: 'ohblog-menu.css',
  shadow: true
})
export class OhblogmenuComponent {

  @Prop()  titulos:string;
  @Prop()  imagem:string;
  @Prop()  backColor:string

  render() {

let arr = this.titulos.split(",");
let titulo1=arr[0];
let titulo2=arr[1];
let titulo3=arr[2];

let arrurl = this.titulos.split(",");
let url1=arrurl[0];
let url2=arrurl[1];
let url3=arrurl[2];

 
    return <div class="ohblogmenu-wrapper">

<ul class="ohblog-menu-root ohblog-menu ohblog-menu-horizontal" role="menu" tabindex="0"  >
  <li class="ohblog-menu-submenu ohblog-menu-submenu-horizontal" >
    <div class="ohblog-menu-submenu-title" aria-expanded="false" aria-haspopup="true">
      <img class="ohblogmenuimg" alt="imagem" src={this.imagem} />
    </div>
  </li>
</ul>


<ul class="ohblog-menu-root ohblog-menu ohblog-menu-horizontal" role="menu" tabindex="0"  >
  <li class="ohblog-menu-submenu ohblog-menu-submenu-horizontal" >
    <div class="ohblog-menu-submenu-title" aria-expanded="false" aria-haspopup="true">
      <a class="submenu-title-wrapper" href={url1} >{titulo1}</a>    </div>
  </li>
</ul>

<ul class="ohblog-menu-root ohblog-menu ohblog-menu-horizontal" role="menu" tabindex="0"  >
  <li class="ohblog-menu-submenu ohblog-menu-submenu-horizontal" >
    <div class="ohblog-menu-submenu-title" aria-expanded="false" aria-haspopup="true">
      <a class="submenu-title-wrapper" href={url2} >{titulo2}</a>    </div>
  </li>
</ul>

<ul class="ohblog-menu-root ohblog-menu ohblog-menu-horizontal" role="menu" tabindex="0"  >
  <li class="ohblog-menu-submenu ohblog-menu-submenu-horizontal" >
    <div class="ohblog-menu-submenu-title" aria-expanded="false" aria-haspopup="true">
      <a class="submenu-title-wrapper" href={url3} >{titulo3}</a>
    </div>
  </li>
</ul>
</div>

//      return <div>{titulo1}{titulo2}{titulo3}{arr.length}</div>;
  }
}
