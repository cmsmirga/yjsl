/*
	File		: yjwl.lightbox.js
	Author		: Christopher Smirga
	Description	: Yaga.io JavaScript Library Lightbox Object
*/

/******************************************************************************/
// Define namespace

var yjsl = yjsl || {};

/******************************************************************************/
// Include lightbox CSS
(function ()
{
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('LINK');
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = 'yjsl.lightbox.css';
	link.media = 'all';
	head.appendChild(link);
})();

/******************************************************************************/
// Define object

yjsl.lightbox = function lightbox (id)
{

	/**************************************************************************/
	// Constants

	var CLASSNAME = "yaga-lightbox";

	/**************************************************************************/
	// Member variables

	var m_id = id;
	var m_closeChar = "\u2716";
	var m_contents = "";
	var m_trigger = "";

	/**************************************************************************/
	// Setup object then call init to set these variables

	var m_overlay;
	var m_container;
	var m_outer;
	var m_close;
	var m_inner;

	/**************************************************************************/
	// Public methods

	this.setId = function (id)
	{
		m_id = id;
	}

	/**************************************************************************/

	this.setCloseChar = function (char)
	{
		m_closeChar = char;
	}

	/**************************************************************************/

	this.setContents = function (contents)
	{
		m_contents = contents;
	}

	/**************************************************************************/

	this.setTrigger = function (trigger)
	{
		m_trigger = trigger;
	}

	/**************************************************************************/

	this.getId = function ()
	{
		return m_id;
	}

	/**************************************************************************/

	this.getCloseChar = function ()
	{
		return m_closeChar;
	}

	/**************************************************************************/

	this.getContents = function ()
	{
		return m_contents;
	}

	this.getTrigger = function ()
	{
		return m_trigger;
	}

	/**************************************************************************/
	// Init must be called once before show or hide

	this.init = function ()
	{
		m_overlay = document.createElement ("DIV");
		m_overlay.className = CLASSNAME + "-overlay " + m_id;

		m_container = document.createElement ("DIV");
		m_container.className = CLASSNAME + "-container " + m_id;

		m_outer = document.createElement ("DIV");
		m_outer.className = CLASSNAME + "-outer " + m_id;

		m_close = document.createElement ("A");
		m_close.className = CLASSNAME + "-close " + m_id;
		m_close.appendChild (document.createTextNode (m_closeChar));

		m_inner = document.createElement ("DIV");
		m_inner.className = CLASSNAME + "-inner " + m_id;
		m_inner.innerHTML = m_contents;

		m_outer.appendChild (m_inner);
		m_outer.appendChild (m_close);
		m_container.appendChild (m_outer);
		m_overlay.appendChild (m_container);
		m_overlay.classList.add ("hide");
		document.body.appendChild (m_overlay);

		document.getElementById (m_trigger).onclick = this.show;
		document.getElementsByClassName (CLASSNAME + "-close " + m_id)[0].onclick = this.hide;
	}

	/**************************************************************************/

	this.show = function ()
	{
		m_overlay.classList.remove ("hide");
		m_overlay.classList.add ("show");
	}

	/**************************************************************************/

	this.hide = function ()
	{
		m_overlay.classList.remove ("show");
		m_overlay.classList.add ("hide");
	}

	/**************************************************************************/

}
