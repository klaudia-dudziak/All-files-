$("document").ready(
	function()
	{
		$("div.naglowek span").each(
			function(i)
			{			
				$(this).addClass("gh"+i);
			}
		);
		$("div.ukrytyTekst").each(
			function(i)
			{			
				$(this).addClass("gh"+i);
			}
		);	


         $("div.naglowek span").click(
             function()
             {
                $("div."+$(this).attr("class")).toggle();
             }
         )
         .toggle(
             function()
             {
                $(this).text("schowaj");
             },
             function()
             {
                $(this).text("więcej");
             }
         );
     }
 );