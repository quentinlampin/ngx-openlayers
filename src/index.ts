import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {COMPONENTS} from './components';

export * from './components';
export * from './services';
export default {
  components: [COMPONENTS]
}

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS
})
export class AngularOpenlayersModule {}
