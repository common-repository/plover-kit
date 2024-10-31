<?php

namespace Plover\Kit\Services;

use Plover\Core\Assets\Scripts;
use Plover\Core\Assets\Styles;
use Plover\Core\Framework\ServiceProvider;

/**
 * @since 1.0.0
 */
class DashboardServiceProvider extends ServiceProvider {

	/**
	 * Bootstrap this service.
	 *
	 * @param Styles $styles
	 * @param Scripts $scripts
	 *
	 * @return void
	 */
	public function boot( Styles $styles, Scripts $scripts ) {
		add_action( 'admin_menu', [ $this, 'add_admin_menu' ] );
		add_filter( 'plover_core_dashboard_data', [ $this, 'dashboard_data' ] );
		add_filter( 'plover_core_should_localize_dashboard_data', [ $this, 'is_dashboard_screen' ] );

		$styles->enqueue_dashboard_asset( 'plover-dashboard-style', array(
			'src'       => plover_kit()->app_url( 'assets/js/dashboard/style.min.css' ),
			'path'      => plover_kit()->app_path( 'assets/js/dashboard/style.min.css' ),
			'ver'       => $this->core->is_debug() ? time() : PLOVER_KIT_VERSION,
			'rtl'       => 'replace',
			'condition' => [ $this, 'is_dashboard_screen' ],
		) );

		$styles->enqueue_dashboard_asset( 'plover-admin-style', array(
			'src'  => plover_kit()->app_url( 'assets/css/admin.css' ),
			'path' => plover_kit()->app_path( 'assets/css/admin.css' ),
			'ver'  => $this->core->is_debug() ? time() : PLOVER_KIT_VERSION,
		) );

		$scripts->enqueue_dashboard_asset( 'plover-dashboard-script', array(
			'src'       => plover_kit()->app_url( 'assets/js/dashboard/index.min.js' ),
			'path'      => plover_kit()->app_path( 'assets/js/dashboard/index.min.js' ),
			'asset'     => plover_kit()->app_path( 'assets/js/dashboard/index.min.asset.php' ),
			'ver'       => $this->core->is_debug() ? time() : PLOVER_KIT_VERSION,
			'condition' => [ $this, 'is_dashboard_screen' ],
			'deps'      => [ 'plover-dashboard-data' ],
		) );
	}

	public function add_admin_menu() {
		add_menu_page(
			__( 'Plover Kit', 'plover-kit' ),
			__( 'Plover Kit', 'plover-kit' ),
			'manage_options',
			'plover-kit',
			'',
			plover_kit()->app_url( 'assets/images/plover-menu-logo.svg' ),
			'58.7'
		);

		add_submenu_page(
			'plover-kit',
			__( 'Plover Kit Modules', 'plover-kit' ),
			__( 'Modules', 'plover-kit' ),
			'manage_options',
			'plover-kit',
			array( $this, 'show_admin_menu' )
		);
	}

	public function is_dashboard_screen() {
		if ( ! function_exists( 'get_current_screen' ) ) {
			return false;
		}

		$screen = get_current_screen();

		return $screen && $screen->base === 'toplevel_page_plover-kit';
	}

	public function dashboard_data( $data ) {
		$data['root'] = 'plover-kit-dashboard-page';

		return $data;
	}

	public function show_admin_menu() {
		?>
        <div id="plover-kit-dashboard-page" class="wrap plover-kit-dashboard-page"></div>
		<?php
	}
}
