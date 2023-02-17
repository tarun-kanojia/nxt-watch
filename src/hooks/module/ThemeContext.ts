export class ThemContextModel{
    active:'light'|'dark';
    themeToggler :Function;
    constructor(theme:'light'|'dark', setTheme : Function){
        this.active = theme
        this.themeToggler = setTheme;
    }

    toggleTheme = () => {
        console.log('active theme:', this.active);
      this.active = this.active == 'light'? 'dark':'light';

      
      this.themeToggler(this.active);
      console.log('changed theme:', this.active)
      
      
    }
}