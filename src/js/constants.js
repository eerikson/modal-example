// Hardcoded things.

export const placeholders = {
	content : [
		{
			type : "page",
			active : true,
			name : "About"
		},
		{
			type : "link",
			active : false,
			name : "Link"
		},
		{
			type : "page",
			active : true,
			name : "Page Name"
		},
		{
			type : "gallery",
			active : true,
			name : "Gallery name",
			items : [
				{
					type : "page",
					active : true,
					name : "Project Name"
				},
				{
					type: "page",
					active : true,
					name : "Project Name"
				},
				{
					type: "page",
					active : true,
					name : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					type: "page",
					active : false,
					name : "Project Name"
				}
			]
		},
		{
			type : "gallery",
			active : true,
			name : "Gallery name",
			items : [
				{
					type : "page",
					active : true,
					name : "Project Name"
				},
				{
					type: "page",
					active : true,
					name : "Project Name"
				},
				{
					type: "page",
					active : true,
					name : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					type: "page",
					active : false,
					name : "Project Name"
				}
			]
		}	
	]
}

export const contentTypes = [
	{
		term: "page",
		name: "Page",
		description : "Create pages such as About, Awards, Press…"
	},
	{
		term: "gallery",
		name: "Gallery",
		description : "Organize your projects by category" 
	},
	{
		term: "link",
		name: "Link",
		description : "Link to a URL of your choice" 
	}
];