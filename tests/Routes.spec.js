describe('Routes', function () {
	var $state;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	describe('Home', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('home');

			expect(state.url).toEqual('/');
		});

		it('should have the correct template', function () {
			expect(state.templateUrl).toEqual('views/home.html');
		});
	});

	describe('Notifications', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('home.notifications');

			expect(state.url).toEqual('notifications');
		});

		it('should have the correct template', function () {
			expect(state.templateUrl).toEqual('views/home/notifications.html');
		});
	});

	describe('Timeline', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('home.timeline');

			expect(state.url).toEqual('timeline');
		});

		it('should have the correct template', function () {
			expect(state.templateUrl).toEqual('views/home/timeline.html');
		});
	});

	describe('User', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('home.user');

			expect(state.url).toEqual('user');
		});

		it('should have the correct template', function () {
			expect(state.templateUrl).toEqual('views/home/user.html');
		});
	});
});