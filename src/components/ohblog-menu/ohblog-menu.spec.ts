import { newSpecPage } from '@stencil/core/testing';
import { OhblogmenuComponent } from './ohblog-menu'

describe('ohblog-menu', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [OhblogmenuComponent],
      html: '<ohblog-menu></ohblog-menu>'
    });
    expect(root).toEqualHtml(`
      <ohblog-menu>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ohblog-menu>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [OhblogmenuComponent],
      html: `<ohblog-menu first="Stencil" last="'Don't call me a framework' JS"></ohblog-menu>`
    });
    expect(root).toEqualHtml(`
      <ohblog-menu first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ohblog-menu>
    `);
  });
});
