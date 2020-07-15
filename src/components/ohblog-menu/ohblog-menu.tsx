import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ohblog-menu',
  styleUrl: 'ohblog-menu.css',
  shadow: false
})
export class OhblogmenuComponent {

  @Prop()  titulos:string;


  render() {

let arr = this.titulos.split(",");
let titulo1=arr[0];
let titulo2=arr[1];
let titulo3=arr[2];
 
    return <div>
            <div class="div-Menu">
              <nav id="menu">
                <ul class="ohBlog-Menu-Ul">
                  <li class="ohBlog-Menu-Ul-Li"><label></label><a href="#"><input value={titulo1} disabled ></input></a></li>
                  <li class="ohBlog-Menu-Ul-Li"><a href="#"><input value={titulo2} disabled ></input></a></li>
                  <li class="ohBlog-Menu-Ul-Li"><a href="#"><input value={titulo3} disabled ></input></a></li>
                </ul>
              </nav>
            </div>
          </div>;

//      return <div>{titulo1}{titulo2}{titulo3}{arr.length}</div>;
  }
}
