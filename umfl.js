// JavaScript Document
<script type="text/javascript">
	                                        
	                                        $(document).ready(function () {
	document.title = 'UMFL 18';
	
	
	
	$('div.adsense:not(#adsense)').remove();
	
	$('div.footer:not(#footer)').hide();
	
	

	// Header
	$("#daddyleagues-menu").appendTo("#dl_nav");
	$(".scorelist").appendTo("#dl_scorelist");
	
        $("#dlmaddenmenu .navbar-nav > li:contains('Forum')").remove();


    	$('.playoffs td div:contains("On The Bubble")').parent().addClass("bubble");
	

	$('.data-table1 td:contains("Cardinals")').prepend('<img src="http://static.nfl.com/static/site/img/teams/ARZ/ARZ_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("arz");
	$('.data-table1 td:contains("Falcons")').prepend('<img src="http://static.nfl.com/static/site/img/teams/ATL/ATL_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("atl");
	$('.data-table1 td:contains("Ravens")').prepend('<img src="http://static.nfl.com/static/site/img/teams/BAL/BAL_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("bal");
	$('.data-table1 td:contains("Bills")').prepend('<img src="http://static.nfl.com/static/site/img/teams/BUF/BUF_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("buf");
	$('.data-table1 td:contains("Panthers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/CAR/CAR_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("car");
	$('.data-table1 td:contains("Bears")').prepend('<img src="http://static.nfl.com/static/site/img/teams/CHI/CHI_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("chi");
	$('.data-table1 td:contains("Bengals")').prepend('<img src="http://static.nfl.com/static/site/img/teams/CIN/CIN_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("cin");
	$('.data-table1 td:contains("Browns")').prepend('<img src="http://static.nfl.com/static/site/img/teams/CLE/CLE_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("cle");
	$('.data-table1 td:contains("Cowboys")').prepend('<img src="http://static.nfl.com/static/site/img/teams/DAL/DAL_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("dal");
	$('.data-table1 td:contains("Broncos")').prepend('<img src="http://static.nfl.com/static/site/img/teams/DEN/DEN_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("den");
	$('.data-table1 td:contains("Lions")').prepend('<img src="http://static.nfl.com/static/site/img/teams/DET/DET_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("det");
	$('.data-table1 td:contains("Packers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/GB/GB_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("gb");
	$('.data-table1 td:contains("Texans")').prepend('<img src="http://static.nfl.com/static/site/img/teams/HOU/HOU_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("hou");
	$('.data-table1 td:contains("Colts")').prepend('<img src="http://static.nfl.com/static/site/img/teams/IND/IND_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("ind");
	$('.data-table1 td:contains("Jaguars")').prepend('<img src="http://static.nfl.com/static/site/img/teams/JAC/JAC_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("jac");
	$('.data-table1 td:contains("Chiefs")').prepend('<img src="http://static.nfl.com/static/site/img/teams/KC/KC_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("kc");
	$('.data-table1 td:contains("Dolphins")').prepend('<img src="http://static.nfl.com/static/site/img/teams/MIA/MIA_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("mia");
	$('.data-table1 td:contains("Vikings")').prepend('<img src="http://static.nfl.com/static/site/img/teams/MIN/MIN_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("min");
	$('.data-table1 td:contains("Patriots")').prepend('<img src="http://static.nfl.com/static/site/img/teams/NE/NE_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("ne");
	$('.data-table1 td:contains("Saints")').prepend('<img src="http://static.nfl.com/static/site/img/teams/NO/NO_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("no");
	$('.data-table1 td:contains("Giants")').prepend('<img src="http://static.nfl.com/static/site/img/teams/NYG/NYG_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("nyg");
	$('.data-table1 td:contains("Jets")').prepend('<img src="http://static.nfl.com/static/site/img/teams/NYJ/NYJ_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("nyj");
	$('.data-table1 td:contains("Raiders")').prepend('<img src="http://static.nfl.com/static/site/img/teams/OAK/OAK_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("oak");
	$('.data-table1 td:contains("Eagles")').prepend('<img src="http://static.nfl.com/static/site/img/teams/PHI/PHI_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("phi");
	$('.data-table1 td:contains("Steelers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/PIT/PIT_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("pit");
	$('.data-table1 td:contains("Chargers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/SD/SD_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("sd");
	$('.data-table1 td:contains("49ers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/SF/SF_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("sf");
	$('.data-table1 td:contains("Seahawks")').prepend('<img src="http://static.nfl.com/static/site/img/teams/SEA/SEA_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("sea");
	$('.data-table1 td:contains("Los Angeles Rams")').prepend('<img src="http://static.nfl.com/static/site/img/teams/STL/STL_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("stl");
	$('.data-table1 td:contains("Buccaneers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/TB/TB_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("tb");
	$('.data-table1 td:contains("Titans")').prepend('<img src="http://static.nfl.com/static/site/img/teams/TEN/TEN_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("ten");
	$('.data-table1 td:contains("Redskins")').prepend('<img src="http://static.nfl.com/static/site/img/teams/WAS/WAS_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("was");
	
	$('.maincontent>h1:contains("Arizona Cardinals")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/arz.png" class="subheader" />');
	$('.maincontent>h1:contains("Atlanta Falcons")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/atl.png" class="subheader" />');
	$('.maincontent>h1:contains("Baltimore Ravens")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/bal.png" class="subheader" />');
	$('.maincontent>h1:contains("Buffalo Bills")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/buf.png" class="subheader" />');
	$('.maincontent>h1:contains("Carolina Panthers")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/car.png" class="subheader" />');
	$('.maincontent>h1:contains("Chicago Bears")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/chi.png" class="subheader" />');
	$('.maincontent>h1:contains("Cincinnati Bengals")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/cin.png" class="subheader" />');
	$('.maincontent>h1:contains("Cleveland Browns")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/cle.png" class="subheader" />');
	$('.maincontent>h1:contains("Dallas Cowboys")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/dal.png" class="subheader" />');
	$('.maincontent>h1:contains("Denver Broncos")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/den.png" class="subheader" />');
	$('.maincontent>h1:contains("Detroit Lions")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/det.png" class="subheader" />');
	$('.maincontent>h1:contains("Green Bay Packers")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/gb.png" class="subheader" />');
	$('.maincontent>h1:contains("Houston Texans")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/hou.png" class="subheader" />');
	$('.maincontent>h1:contains("Indianapolis Colts")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/ind.png" class="subheader" />');
	$('.maincontent>h1:contains("Jacksonville Jaguars")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/jac.png" class="subheader" />');
	$('.maincontent>h1:contains("Kansas City Chiefs")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/kc.png" class="subheader" />');
	$('.maincontent>h1:contains("Miami Dolphins")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/mia.png" class="subheader" />');
	$('.maincontent>h1:contains("Minnesota Vikings")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/min.png" class="subheader" />');
	$('.maincontent>h1:contains("New England Patriots")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/ne.png" class="subheader" />');
	$('.maincontent>h1:contains("New Orleans Saints")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/no.png" class="subheader" />');
	$('.maincontent>h1:contains("New York Giants")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/nyg.png" class="subheader" />');
	$('.maincontent>h1:contains("New York Jets")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/nyj.png" class="subheader" />');
	$('.maincontent>h1:contains("Oakland Raiders")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/oak.png" class="subheader" />');
	$('.maincontent>h1:contains("Philadelphia Eagles")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/phi.png" class="subheader" />');
	$('.maincontent>h1:contains("Pittsburgh Steelers")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/pit.png" class="subheader" />');
	$('.maincontent>h1:contains("San Diego Chargers")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/sd.png" class="subheader" />');
	$('.maincontent>h1:contains("San Francisco 49ers")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/sf.png" class="subheader" />');
	$('.maincontent>h1:contains("Seattle Seahawks")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/sea.png" class="subheader" />');
	$('.maincontent>h1:contains("St. Louis Rams")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/stl.png" class="subheader" />');
	$('.maincontent>h1:contains("Tampa Bay Buccaneers")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/tb.png" class="subheader" />');
	$('.maincontent>h1:contains("Tennessee Titans")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/ten.png" class="subheader" />');
	$('.maincontent>h1:contains("Washington Redskins")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.3/img/subheaders/was.png" class="subheader" />');
	

	$('.standings .data-table1 tbody td a:contains("Arizona Cardinals")').text('ARZ');
	$('.standings .data-table1 tbody td a:contains("Atlanta Falcons")').text('ATL');
	$('.standings .data-table1 tbody td a:contains("Baltimore Ravens")').text('BAL');
	$('.standings .data-table1 tbody td a:contains("Buffalo Bills")').text('BUF');
	$('.standings .data-table1 tbody td a:contains("Carolina Panthers")').text('CAR');
	$('.standings .data-table1 tbody td a:contains("Chicago Bears")').text('CHI');
	$('.standings .data-table1 tbody td a:contains("Cincinnati Bengals")').text('CIN');
	$('.standings .data-table1 tbody td a:contains("Cleveland Browns")').text('CLE');
	$('.standings .data-table1 tbody td a:contains("Dallas Cowboys")').text('DAL');
	$('.standings .data-table1 tbody td a:contains("Denver Broncos")').text('DEN');
	$('.standings .data-table1 tbody td a:contains("Detroit Lions")').text('DET');
	$('.standings .data-table1 tbody td a:contains("Green Bay Packers")').text('GB');
	$('.standings .data-table1 tbody td a:contains("Houston Texans")').text('HOU');
	$('.standings .data-table1 tbody td a:contains("Indianapolis Colts")').text('IND');
	$('.standings .data-table1 tbody td a:contains("Jacksonville Jaguars")').text('JAC');
	$('.standings .data-table1 tbody td a:contains("Kansas City Chiefs")').text('KC');
	$('.standings .data-table1 tbody td a:contains("Miami Dolphins")').text('MIA');
	$('.standings .data-table1 tbody td a:contains("Minnesota Vikings")').text('MIN');
	$('.standings .data-table1 tbody td a:contains("New England Patriots")').text('NE');
	$('.standings .data-table1 tbody td a:contains("New Orleans Saints")').text('NO');
	$('.standings .data-table1 tbody td a:contains("New York Giants")').text('NYG');
	$('.standings .data-table1 tbody td a:contains("New York Jets")').text('NYJ');
	$('.standings .data-table1 tbody td a:contains("Oakland Raiders")').text('OAK');
	$('.standings .data-table1 tbody td a:contains("Philadelphia Eagles")').text('PHI');
	$('.standings .data-table1 tbody td a:contains("Pittsburgh Steelers")').text('PIT');
	$('.standings .data-table1 tbody td a:contains("Los Angeles Chargers")').text('LAC');
	$('.standings .data-table1 tbody td a:contains("San Francisco 49ers")').text('SF');
	$('.standings .data-table1 tbody td a:contains("Seattle Seahawks")').text('SEA');
	$('.standings .data-table1 tbody td a:contains("Los Angeles Rams")').text('LAR');
	$('.standings .data-table1 tbody td a:contains("Tampa Bay Buccaneers")').text('TB');
	$('.standings .data-table1 tbody td a:contains("Tennessee Titans")').text('TEN');
	$('.standings .data-table1 tbody td a:contains("Washington Redskins")').text('WAS');
	$('.standings .data-table1 tbody td:nth-child(5n)').remove();
	
});

$('a>span:contains("ARI")').replaceWith('<img src="/img/nfl/teams/left/6.png" width="25" height="25"" class="scoreboard">Ari</span>');
$('a>span:contains("ATL")').replaceWith('<img src="/img/nfl/teams/left/13.png" width="25" height="25"" class="scoreboard">Atl</span>');
$('a>span:contains("BAL")').replaceWith('<img src="/img/nfl/teams/left/24.png" width="25" height="25"" class="scoreboard"> Bal </span>');
$('a>span:contains("BUF")').replaceWith('<img src="/img/nfl/teams/left/2.png" width="25" height="25"" class="scoreboard"> Buf </span>');
$('a>span:contains("CAR")').replaceWith('<img src="/img/nfl/teams/left/20.png" width="25" height="25"" class="scoreboard"> Car </span>');
$('a>span:contains("CHI")').replaceWith('<img src="/img/nfl/teams/left/0.png" width="25" height="25"" class="scoreboard"> Chi </span>');
$('a>span:contains("CIN")').replaceWith('<img src="/img/nfl/teams/left/1.png" width="25" height="25"" class="scoreboard"> Cin </span>');
$('a >span:contains("CLE")').replaceWith('<img src="/img/nfl/teams/left/4.png" width="25" height="25""" class="scoreboard"> Cle </span>');
$('a>span:contains("DAL")').replaceWith('<img src="/img/nfl/teams/left/10.png" width="25" height="25"" class="scoreboard"> Dal </span>');
$('a>span:contains("DEN")').replaceWith('<img src="/img/nfl/teams/left/3.png" width="25" height="25"" class="scoreboard"> Den </span>');
$('a>span:contains("DET")').replaceWith('<img src="/img/nfl/teams/left/18.png" width="25" height="25"" class="scoreboard"> Det </span>');
$('a>span:contains("GB")').replaceWith('<img src="/img/nfl/teams/left/19.png" width="25" height="25"" class="scoreboard"> GB </span>');
$('a>span:contains("HOU")').replaceWith('<img src="/img/nfl/teams/left/31.png" width="25" height="25"" class="scoreboard"> Hou </span>');
$('a>span:contains("IND")').replaceWith('<img src="/img/nfl/teams/left/9.png" width="25" height="25"" class="scoreboard"> Ind </span>');
$('a>span:contains("JAX")').replaceWith('<img src="/img/nfl/teams/left/16.png" width="25" height="25"" class="scoreboard"> Jax </span>');
$('a>span:contains("KC")').replaceWith('<img src="/img/nfl/teams/left/8.png" width="25" height="25"" class="scoreboard"> KC </span>');
$('a>span:contains("MIA")').replaceWith('<img src="/img/nfl/teams/left/11.png" width="25" height="25"" class="scoreboard"> Mia </span>');
$('a>span:contains("MIN")').replaceWith('<img src="/img/nfl/teams/left/30.png" width="25" height="25"" class="scoreboard"> Min </span>');
$('a>span:contains("NE")').replaceWith('<img src="/img/nfl/teams/left/21.png"width="25" height="25"" class="scoreboard"> NE </span>');
$('a>span:contains("NO")').replaceWith('<img src="/img/nfl/teams/left/26.png" width="25" height="25"" class="scoreboard"> NO </span>');
$('a>span:contains("NYG")').replaceWith('<img src="/img/nfl/teams/left/15.png" width="25 height="25"" class="scoreboard"> NYG </span>');
$('a>span:contains("NYJ")').replaceWith('<img src="/img/nfl/teams/left/17.png" width="25" height="25"" class="scoreboard"> NYJ </span>');
$('a>span:contains("OAK")').replaceWith('<img src="/img/nfl/teams/left/22.png" width="25" height="25"" class="scoreboard"> Oak </span>');
$('a>span:contains("PHI")').replaceWith('<img src="/img/nfl/teams/left/12.png" width="25" height="25"" class="scoreboard"> Phi </span>');
$('a>span:contains("PIT")').replaceWith('<img src="/img/nfl/teams/left/28.png" width="25" height="25"" class="scoreboard"> Pit </span>');
$('a>span:contains("SD")').replaceWith('<img src="/img/nfl/teams/left/181.png" width="25" height="25"" class="scoreboard"> SD </span>');
$('a>span:contains("SF")').replaceWith('<img src="/img/nfl/teams/left/14.png" width="25" height="25"" class="scoreboard"> SF </span>');
$('a>span:contains("SEA")').replaceWith('<img src="/img/nfl/teams/left/27.png" width="25" height="25"" class="scoreboard"> Sea </span>');
$('a>span:contains("LAR")').replaceWith('<img src="/img/nfl/teams/left/23.png" width="25" height="25"" class="scoreboard"> LAR </span>');
$('a>span:contains("LAC")').replaceWith('<img src="/img/nfl/teams/left/7.png" width="25" height="25"" class="scoreboard"> LAC </span>');
$('a>span:contains("TB")').replaceWith('<img src="/img/nfl/teams/left/5.png" width="25" height="25"" class="scoreboard"> TB </span>');
$('a>span:contains("TEN")').replaceWith('<img src="/img/nfl/teams/left/29.png" width="25" height="25"" class="scoreboard"> Ten </span>');
$('a>span:contains("WAS")').replaceWith('<img src="/img/nfl/teams/left/25.png" width="25" height="25"" class="scoreboard"> Was </span>');

</script>