import AppController from './app.controller';

const AppComponent = {
  controller: AppController,
  template: `
    <navbar></navbar>

    <ng-view autoscroll></ng-view>

    <footer class="footer">
      <div class="container">
        <div class="pull-left">
          <small>
            &copy; {{ ::$ctrl.date | date:'yyyy' }} The Love is our Weapon Campaign
          </small>
        </div>
        <div class="pull-right">
          <small>
            <ul class="list-inline">
              <li>
                Need help?
                <a href="mailto:hello@loveisourweapon.com?subject=Hello!">Say hello!</a>
              </li>
              <!-- TODO: add Help, Privacy & Terms links -->
              <!--<li><a href="#">Help</a></li>
              <li><a href="#">Privacy &amp; Terms</a></li>-->
            </ul>
          </small>
        </div>
      </div>
    </footer>
  `
};

export default AppComponent;
