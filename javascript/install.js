
function get_redirect_url() {
  var path = document.location.pathname;
  var end_of_directory = path.lastIndexOf("/");
  var directory_path = path.slice(0, end_of_directory + 1);
  return document.location.origin + directory_path + "installing.html";
}

function build_specification() {
  // see https://github.com/CodersOS/image-creator-server/blob/master/docs/README.md
  var spec = {};
  spec.redirect = get_redirect_url();
  spec.commands = [];
  var installs = software_spec_to_install();
  for (var i; i < installs.length; i += 1) {
    var software_spec = installs[i];
    var build_spec = get_build_command(software_spec);
    spec.commands.push(build_spec);
  }
  return spec;
}

function get_build_command(software) {
  var command = {};
  command.name = software.id;
  if (spec.script) {
    command.command = get_command_from_file_name(spec.script);
    if (spec.command) {
      alert("You can not specify command and script in " + software.id + ".");
    }
  } else if (spec.command) {
    command.command = spec.command;
  } else {
    command = get_null_command();
  }
  command.arguments = []; // TODO: Read parameters from options
  return command;
}

function install_everything() {
  
}